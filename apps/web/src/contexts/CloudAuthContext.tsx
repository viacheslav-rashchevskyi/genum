import { createContext, useContext, type ReactNode } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export interface UnifiedAuth {
	isAuthenticated: boolean;
	isLoading: boolean;
	user: { sub?: string; email?: string; name?: string; picture?: string } | null | undefined;
	getAccessTokenSilently: () => Promise<string>;
	// biome-ignore lint/suspicious/noExplicitAny: adapter between LocalAuth and Auth0 — their option types are incompatible
	loginWithRedirect: (options?: any) => void | Promise<void>;
	// biome-ignore lint/suspicious/noExplicitAny: adapter between LocalAuth and Auth0 — their option types are incompatible
	logout: (options?: any) => void | Promise<void>;
}

export const CloudAuthContext = createContext<UnifiedAuth | null>(null);

/**
 * Mounted only inside Auth0Provider (cloud mode).
 * Reads from useAuth0() unconditionally and exposes the result via CloudAuthContext.
 * This lets useAuth() avoid conditional hook calls.
 */
export function CloudAuthBridge({ children }: { children: ReactNode }) {
	const auth0 = useAuth0();

	const value: UnifiedAuth = {
		isAuthenticated: auth0.isAuthenticated,
		isLoading: auth0.isLoading,
		user: auth0.user,
		getAccessTokenSilently:
			auth0.getAccessTokenSilently as UnifiedAuth["getAccessTokenSilently"],
		loginWithRedirect: auth0.loginWithRedirect as UnifiedAuth["loginWithRedirect"],
		logout: auth0.logout as UnifiedAuth["logout"],
	};

	return <CloudAuthContext.Provider value={value}>{children}</CloudAuthContext.Provider>;
}

export function useCloudAuth() {
	return useContext(CloudAuthContext);
}
