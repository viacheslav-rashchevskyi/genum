import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/useToast";
import { useSearchParams } from "react-router-dom";
import CreateMemoryDialog from "@/components/dialogs/CreateMemoryDialog";
import { PlusCircle, Inbox, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { promptApi } from "@/api/prompt";
import type { Memory } from "@/api/prompt/prompt.api";
import { testcasesApi } from "@/api/testcases/testcases.api";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { usePlaygroundActions, usePlaygroundTestcase } from "@/stores/playground.store";

interface MemoryKeyProps {
	promptId: number;
}

const MemoryKey = ({ promptId }: MemoryKeyProps) => {
	const { setSelectedMemoryId, setSelectedMemoryKeyName, setPersistedMemoryId } =
		usePlaygroundActions();
	const { selectedMemoryKeyName, persistedMemoryId } = usePlaygroundTestcase();

	const [selectedKey, setSelectedKey] = useState(persistedMemoryId || "");
	const [memoryValue, setMemoryValue] = useState("");
	const [createMemoryModalOpen, setCreateMemoryModalOpen] = useState(false);
	const [showClearIcon, setShowClearIcon] = useState(false);
	const [isManuallyCleared, setIsManuallyCleared] = useState(false);
	const [isOpenMemory, setIsOpenMemory] = useState(false);
	const originalValueRef = useRef("");
	const isUpdatingRef = useRef(false);
	const isInitializedRef = useRef(false);
	const selectedKeyRef = useRef(selectedKey);

	useEffect(() => {
		selectedKeyRef.current = selectedKey;
	}, [selectedKey]);

	const [searchParams] = useSearchParams();
	const testcaseId = searchParams.get("testcaseId");

	const [memories, setMemories] = useState<Memory[]>([]);
	const [testcase, setTestcase] = useState<any>(null);
	const [isPending, setIsPending] = useState(false);

	const fetchMemories = useCallback(async () => {
		if (!promptId) return;
		try {
			const data = await promptApi.getMemories(promptId);
			setMemories(data.memories);
		} catch (error) {
			console.error("Failed to fetch memories", error);
		}
	}, [promptId]);

	const fetchTestcase = useCallback(async () => {
		if (!testcaseId) {
			setTestcase(null);
			return;
		}
		try {
			const data = await testcasesApi.getTestcase(testcaseId);
			setTestcase(data);
		} catch (error) {
			console.error("Failed to fetch testcase", error);
		}
	}, [testcaseId]);

	useEffect(() => {
		fetchMemories();
	}, [fetchMemories]);

	useEffect(() => {
		fetchTestcase();
	}, [fetchTestcase]);

	const prevPromptIdRef = useRef<number | undefined>(promptId);
	const prevTestcaseIdRef = useRef<string | null>(testcaseId);

	const syncSelection = useCallback(
		(memoryId: string, memoryKeyName = "") => {
			setSelectedMemoryId(memoryId);
			setPersistedMemoryId(memoryId);
			setSelectedMemoryKeyName(memoryKeyName);
		},
		[setSelectedMemoryId, setPersistedMemoryId, setSelectedMemoryKeyName],
	);

	// Reset when prompt changes
	useEffect(() => {
		const prevPromptId = prevPromptIdRef.current;
		const currentPromptId = promptId;

		if (prevPromptId !== undefined && prevPromptId !== currentPromptId) {
			setSelectedKey("");
			setMemoryValue("");
			originalValueRef.current = "";
			setIsManuallyCleared(false);
			isInitializedRef.current = false;
			syncSelection("", "");
		}

		prevPromptIdRef.current = currentPromptId;
	}, [promptId, syncSelection]);

	// Reset when testcase changes
	useEffect(() => {
		const prevTestcaseId = prevTestcaseIdRef.current;
		const currentTestcaseId = testcaseId;

		if (prevTestcaseId !== currentTestcaseId) {
			isInitializedRef.current = false;
			setIsManuallyCleared(false);
		}

		prevTestcaseIdRef.current = currentTestcaseId;
	}, [testcaseId]);

	useEffect(() => {
		if (isUpdatingRef.current) {
			return;
		}

		if (!persistedMemoryId && selectedKey) {
			setSelectedKey("");
			setMemoryValue("");
			originalValueRef.current = "";
			return;
		}

		if (persistedMemoryId && persistedMemoryId !== selectedKey && !isManuallyCleared) {
			setSelectedKey(persistedMemoryId);
		}
	}, [persistedMemoryId, selectedKey, isManuallyCleared]);

	// Initialize and sync memory selection
	useEffect(() => {
		if (isUpdatingRef.current || memories.length === 0) {
			return;
		}

		// If we have testcaseId but testcase data hasn't loaded yet, wait
		if (testcaseId && !testcase) {
			return;
		}

		const testcaseMemoryId = testcase?.testcase?.memoryId;
		const memoryIdToLoad = persistedMemoryId || (testcaseMemoryId ? String(testcaseMemoryId) : "");
		const currentSelectedKey = selectedKeyRef.current;

		// If there's a memory to load and it's different from current selection
		if (memoryIdToLoad && memoryIdToLoad !== currentSelectedKey && !isManuallyCleared) {
			const memory = memories.find((item) => String(item.id) === memoryIdToLoad);

			if (memory) {
				setSelectedKey(String(memory.id));
				setMemoryValue(memory.value);
				originalValueRef.current = memory.value;
				syncSelection(String(memory.id), memory.key);
			}
		}
		// If no memory should be selected and we have one selected, clear it
		else if (!memoryIdToLoad && currentSelectedKey && !isManuallyCleared) {
			setSelectedKey("");
			setMemoryValue("");
			originalValueRef.current = "";
			syncSelection("", "");
		}

		if (!isInitializedRef.current) {
			isInitializedRef.current = true;
		}
	}, [
		memories,
		testcase,
		persistedMemoryId,
		testcaseId,
		isManuallyCleared,
		syncSelection,
	]);

	// Update memory value when selectedKey changes
	useEffect(() => {
		if (isUpdatingRef.current || !isInitializedRef.current) {
			return;
		}

		if (selectedKey && memories.length > 0) {
			const memory = memories.find((item) => item.id === Number(selectedKey));

			if (memory && memory.value !== originalValueRef.current) {
				setMemoryValue(memory.value);
				originalValueRef.current = memory.value;
			}
		}
	}, [selectedKey, memories]);

	useEffect(() => {
		if (memories.length === 0) {
			return;
		}

		if (selectedKey) {
			const memory = memories.find((item) => String(item.id) === selectedKey);
			if (!memory) {
				setSelectedKey("");
				setMemoryValue("");
				originalValueRef.current = "";
				setIsManuallyCleared(true);
				syncSelection("", "");
				return;
			}

			if (selectedMemoryKeyName !== memory.key) {
				setSelectedMemoryKeyName(memory.key);
			}
		} else if (persistedMemoryId) {
			const memory = memories.find(
				(item) => item.id === Number(persistedMemoryId),
			);
			if (!memory) {
				syncSelection("", "");
				return;
			}

			if (selectedMemoryKeyName !== memory.key) {
				setSelectedMemoryKeyName(memory.key);
			}
		}
	}, [
		memories,
		selectedKey,
		persistedMemoryId,
		selectedMemoryKeyName,
		setSelectedMemoryKeyName,
		syncSelection,
	]);

	const displayMemoryName = useMemo(() => {
		if (selectedMemoryKeyName) {
			return selectedMemoryKeyName;
		}

		if (persistedMemoryId && memories.length > 0) {
			const memory = memories.find(
				(item) => item.id === Number(persistedMemoryId),
			);
			return memory?.key || "";
		}

		return "";
	}, [selectedMemoryKeyName, persistedMemoryId, memories]);

	const updateMemory = async (_promptId: number, value: string) => {
		const memory = memories.find((item) => item.id === Number(selectedKey));
		if (memory) {
			try {
				await promptApi.updateMemory(promptId, memory.id, { value });
				originalValueRef.current = value;
				fetchMemories();
			} catch {
				toast({
					title: "Something went wrong",
					variant: "destructive",
				});
			}
		}
	};

	const onValueChange = (value: string) => {
		setMemoryValue(value);
	};

	const onBlurHandler = () => {
		if (promptId && selectedKey && memoryValue !== originalValueRef.current) {
			updateMemory(promptId, memoryValue);
		}
	};

	const onSelectKeyHandler = async (key: string) => {
		if (selectedKey && memoryValue !== originalValueRef.current) {
			await updateMemory(promptId, memoryValue);
		}

		setIsManuallyCleared(false);
		isUpdatingRef.current = true;

		const memory = key
			? memories.find((item) => item.id === Number(key))
			: undefined;

		if (key && memories.length > 0) {
			if (memory) {
				setMemoryValue(memory.value);
				originalValueRef.current = memory.value;
			} else {
				setMemoryValue("");
				originalValueRef.current = "";
			}
		} else {
			setMemoryValue("");
			originalValueRef.current = "";
		}

		setSelectedKey(key);
		syncSelection(key, memory?.key || "");

		if (testcaseId) {
			try {
				await testcasesApi.updateTestcase(testcaseId, {
					memoryId: memory ? memory.id : null,
				});
				await Promise.all([fetchMemories(), fetchTestcase()]);
				setTimeout(() => {
					isUpdatingRef.current = false;
				}, 100);
			} catch {
				isUpdatingRef.current = false;
				toast({
					title: "Something went wrong",
					variant: "destructive",
				});
			}
		} else {
			isUpdatingRef.current = false;
		}
	};

	const clearSelectedMemory = async (e: MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();

		if (selectedKey && memoryValue !== originalValueRef.current) {
			await updateMemory(promptId, memoryValue);
		}

		setSelectedKey("");
		setMemoryValue("");
		originalValueRef.current = "";
		setIsManuallyCleared(true);
		isUpdatingRef.current = true;
		isInitializedRef.current = true; // Keep initialized to prevent re-initialization

		syncSelection("", "");

		if (testcaseId) {
			try {
				await testcasesApi.updateTestcase(testcaseId, { memoryId: null });

				toast({
					title: "Memory cleared",
					description: "Memory selection has been reset",
				});

				await Promise.all([fetchMemories(), fetchTestcase()]);

				setTimeout(() => {
					isUpdatingRef.current = false;
				}, 100);
			} catch {
				setIsManuallyCleared(false);
				isUpdatingRef.current = false;
				toast({
					title: "Something went wrong",
					variant: "destructive",
				});
			}
		} else {
			isUpdatingRef.current = false;
			toast({
				title: "Memory cleared",
				description: "Memory selection has been reset",
			});
		}
	};

	const createMemoryHandler = async (key: string, value: string) => {
		setIsPending(true);
		try {
			const response = await promptApi.createMemory(promptId, { key, value });
			setCreateMemoryModalOpen(false);
			setIsManuallyCleared(false);
			isUpdatingRef.current = true;

			const newMemoryId = response.memory?.id;
			if (!newMemoryId) {
				isUpdatingRef.current = false;
				return;
			}

			await fetchMemories();

			setSelectedKey(String(newMemoryId));
			setMemoryValue(value);
			originalValueRef.current = value;
			isInitializedRef.current = true;
			syncSelection(String(newMemoryId), key);

			if (testcaseId) {
				try {
					await testcasesApi.updateTestcase(testcaseId, {
						memoryId: newMemoryId,
					});
					await fetchTestcase();
				} catch {
					console.error("Failed to update testcase");
				}
			}

			setTimeout(() => {
				isUpdatingRef.current = false;
			}, 100);

			toast({
				title: "Memory created",
				description: `Memory "${key}" has been created and selected`,
			});
		} catch {
			isUpdatingRef.current = false;
			toast({
				title: "Something went wrong",
				variant: "destructive",
			});
		} finally {
			setIsPending(false);
		}
	};

	const selectedMemory = memories.find((item: Memory) => String(item.id) === selectedKey);

	const selectedKeyName = selectedMemory?.key || selectedMemoryKeyName;

	return (
		<>
			<Popover open={isOpenMemory} onOpenChange={setIsOpenMemory}>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<PopoverTrigger asChild>
								<button className="w-[130px] h-[32px] px-3 rounded-md transition-colors flex items-center gap-2 hover:bg-muted/20">
									<h2 className="text-[#18181B] dark:text-[#FFFFFF] text-[12px] not-italic font-bold flex-shrink-0">
										Memory:
									</h2>
									<span className="flex-1 min-w-0 text-[#71717A] dark:text-[#FFFFFFBF] text-[12px] font-normal truncate">
										{displayMemoryName || "Select"}
									</span>
								</button>
							</PopoverTrigger>
						</TooltipTrigger>
						<TooltipContent>
							<p>Choose extra runtime context</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
				<PopoverContent className="w-[400px] rounded-xl p-4" align="start">
					<div className="space-y-4">
						<h3 className="text-[#09090B] dark:text-[#FFFFFF] text-[14px] font-bold">
							Memory
						</h3>
						<div className="flex flex-col gap-2 mb-1">
							<div
								className="relative"
								onMouseEnter={() => selectedKey && setShowClearIcon(true)}
								onMouseLeave={() => setShowClearIcon(false)}
							>
								<Select value={selectedKey} onValueChange={onSelectKeyHandler}>
									<SelectTrigger className="text-sm font-normal leading-5 text-muted-foreground w-full">
										<SelectValue placeholder="Select">
											{selectedKeyName}
										</SelectValue>
									</SelectTrigger>

									<SelectContent className="space-y-1 text-sm font-normal leading-5 w-full">
										<div className="p-2">
											{memories &&
												memories.length > 0 &&
												memories.map((item: Memory) => (
													<SelectItem
														key={item.id}
														value={String(item.id)}
													>
														{item.key}
													</SelectItem>
												))}

											{(!memories || memories.length === 0) && (
												<div className="flex w-full items-center justify-center rounded-xl border border-dashed border-border p-4 shadow-sm bg-card">
													<div className="flex flex-col items-center gap-4 text-muted-foreground">
														<div className="p-4 rounded-xl border border-border shadow-md bg-card">
															<Inbox
																className="h-6 w-6"
																strokeWidth={1.5}
															/>
														</div>
														<span className="text-base font-medium tracking-wide">
															No data
														</span>
													</div>
												</div>
											)}

											<div className="m-1 mt-2">
												<Button
													type="button"
													variant="secondary"
													size="sm"
													className="w-full justify-center gap-2 text-sm"
													onClick={(e) => {
														e.stopPropagation();
														setCreateMemoryModalOpen(true);
													}}
												>
													<PlusCircle className="h-4 w-4" />
													Create memory
												</Button>
											</div>
										</div>
									</SelectContent>
								</Select>

								{selectedKey && showClearIcon && (
									<button
										type="button"
										onClick={clearSelectedMemory}
										aria-label="Clear selected memory"
										className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full transition-colors z-10
                        bg-muted hover:bg-accent text-muted-foreground"
									>
										<X className="h-4 w-4" />
									</button>
								)}
							</div>

							{selectedKey && (
								<>
									<p className="text-xs font-medium mt-2 text-foreground">
										Memory Value
									</p>
									<Textarea
										placeholder="Enter memory value"
										value={memoryValue}
										onChange={(e) => onValueChange(e.target.value)}
										onBlur={onBlurHandler}
										className="w-full min-h-[180px] max-h-[300px]"
									/>
								</>
							)}
						</div>
					</div>
				</PopoverContent>
			</Popover>

			<CreateMemoryDialog
				open={createMemoryModalOpen}
				setOpen={setCreateMemoryModalOpen}
				confirmationHandler={createMemoryHandler}
				loading={isPending}
			/>
		</>
	);
};

export default MemoryKey;
