import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { validateUsePermission } from "../utils/validateUsePermissions";

type UseCanParams = {
  permissions?: string[];
  roles?: string[];
}

export function useCan({ permissions, roles }: UseCanParams) {
  const { user, isAuthenticated } = useContext(AuthContext)

  if(!isAuthenticated) {
    return false;
  }

  const userHasValidPermissions = validateUsePermission({
    user,
    permissions,
    roles
  })

  return userHasValidPermissions
}