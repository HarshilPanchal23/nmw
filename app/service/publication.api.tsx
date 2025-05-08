import { request } from "../helper/axiosConfig"; // Only import what you need
export const createPublication = (publication: any) => {
    return request({
        url: 'publication/create',
        method: 'POST',
        body: publication
    })
}
export const getPublcation = (pageNumber: number, pageSize: number, sortBy: string = 'id', sortOrder: string = 'asc') => {
    return request({
        url: `publication/list?page_no=${pageNumber}&page_size=${pageSize}&sort_by=${sortBy}&sort_order=${sortOrder}`,
        method: 'GET',
    });
}
export const editPublication = (id: number, publication: any) => {
    return request({
      url: `publication/edit?publication_id=${id}`,
      method: 'PUT',
      body: publication
    });
  };
  export const deletePublication = (id: number) => {
    return request({
      url: `publication/delete?publication_id=${id}`,
      method: 'DELETE',
    });
  };
