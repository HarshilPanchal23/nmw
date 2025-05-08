import { request } from "../helper/axiosConfig";


interface Ministry {
    id?: string;
    name: string;
    description?: string;
    // Add any additional fields from your actual data model
  }

  
// Add Ministry
export const addMinistry = (data: Ministry): Promise<any> => {
    return request({
      url: 'ministry/ministry',
      method: 'POST',
      body: data,
    });
};
  
  // Update Ministry
  export const updateMinistry = (data: Ministry): Promise<any> => {
    return request({
      url: 'ministry/ministry',
      method: 'PATCH',
      body: data,
    });
  };
  
  // Read Ministries
  export const fetchMinistries = (): Promise<Ministry[]> => {
    return request({
      url: 'ministry/ministries',
      method: 'POST',
      body: {}, // some APIs require a body even if empty
    });
  };
  
  // Delete Ministry
  export const deleteMinistry = (ministryId: string): Promise<any> => {
    return request({
      url: `ministry/delete_ministry/${ministryId}`,
      method: 'DELETE',
    });
  };
  
  // Get Ministry by ID
  export const getMinistryById = (ministryId: string): Promise<Ministry> => {
    return request({
      url: `ministry/ministry/${ministryId}`,
      method: 'GET',
    });
  };
  