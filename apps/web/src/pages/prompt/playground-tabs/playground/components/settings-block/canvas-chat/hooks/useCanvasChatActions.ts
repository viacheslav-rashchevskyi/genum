import { useCallback } from "react";
import type { Action } from "@/types/Canvas";
import type { UseCanvasChatActionsProps } from "../types";
import { logger } from "@/lib/logger";

export const useCanvasChatActions = ({
	onEditPrompt,
	onAuditPrompt,
}: UseCanvasChatActionsProps) => {
	const handleEditPrompt = useCallback(
		(value: string) => {
			onEditPrompt(value);
		},
		[onEditPrompt],
	);

	const handleAuditPrompt = useCallback(
		(value: unknown) => {
			onAuditPrompt(value);
		},
		[onAuditPrompt],
	);

	const processAction = useCallback(
		(action: Action) => {
			try {
				if (action.type === "edit_prompt") {
					handleEditPrompt(action.value);
				} else if (action.type === "audit_prompt") {
					handleAuditPrompt(action.value);
				}
			} catch (error) {
				logger.error("Error in processAction:", error);
			}
		},
		[handleEditPrompt, handleAuditPrompt],
	);

	return {
		processAction,
	};
};
