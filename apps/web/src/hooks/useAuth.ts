import { useLocalAuth } from "@/contexts/LocalAuthContext";
import { useCloudAuth } from "@/contexts/CloudAuthContext";

/**
 * Unified authentication hook for both cloud (Auth0) and self-hosted modes.
 *
 * Both hooks are called unconditionally:
 * - useLocalAuth()  — safe in all modes (LocalAuthProvider is always mounted)
 * - useCloudAuth()  — reads CloudAuthContext, returns null in local mode
 *
 * In cloud mode CloudAuthBridge (inside Auth0Provider) populates CloudAuthContext,
 * so useCloudAuth() returns the Auth0 auth and takes precedence.
 */
export function useAuth() {
	const localAuth = useLocalAuth();
	const cloudAuth = useCloudAuth();

	if (cloudAuth) {
		return cloudAuth;
	}

	return {
		isAuthenticated: localAuth.isAuthenticated,
		isLoading: localAuth.isLoading,
		user: localAuth.user,
		getAccessTokenSilently: localAuth.getAccessTokenSilently,
		loginWithRedirect: localAuth.loginWithRedirect,
		logout: localAuth.logout,
	};
}
