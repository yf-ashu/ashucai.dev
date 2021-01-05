import axios, { AxiosRequestConfig as Config } from 'axios';

export type { Config };
export const fetchApi = async<T>(
	{ apiUrl, payloads }: { apiUrl: string, payloads: Config },
): Promise<T> => {
	const requestPaload = { ...payloads, url: apiUrl };
	try {
		const result = await axios.request<T>(requestPaload);

		return Promise.resolve(result.data);
	} catch (error) {
		return Promise.reject(error);
	}
};
