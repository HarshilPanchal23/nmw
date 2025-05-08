import { request } from "../helper/axiosConfig";

interface Role {
    id?: string;
    name: string;
    description?: string;
    // Extend with other fields your API expects/returns
  }
  // Insert Role


export const insertRole = (data: Role): Promise<any> => {
    return request({
      url: 'role/insert-role',
      method: 'POST',
      body: data,
    });
  };
  
  // Get Roles
  export const getRoles = (): Promise<Role[]> => {
    return request({
      url: 'role/get-roles',
      method: 'GET',
    });
  };
  
  // Update Role
  export const updateRole = (roleId: string, data: Role): Promise<any> => {
    return request({
      url: `role/update-role/${roleId}`,
      method: 'PUT',
      body: data,
    });
  };
  
  // Delete Role
  export const deleteRole = (roleId: string): Promise<any> => {
    return request({
      url: `role/delete-role/${roleId}`,
      method: 'DELETE',
    });
  };
  