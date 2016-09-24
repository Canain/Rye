declare const fetch: _fetch.FetchStatic;

export default class API {
	hostname = 'http://rye.canain.com:8080';
	
	post<T>(path: string, send: any): Promise<T> {
		return fetch(this.hostname + path, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(send)
		}).then(r => r.json());
	}
}
