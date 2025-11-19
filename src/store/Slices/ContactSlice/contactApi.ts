import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL}),
  endpoints: (builder) => ({
    saveAndSendContact: builder.mutation<any, any>({ 
      query: (contactData) => ({
        url: '/api/v1/contacts/save-and-send-contact',
        method: 'POST',
        body: contactData,
      }),
    }),
  }),
});

export const { useSaveAndSendContactMutation } = contactApi;
