function savaData(key: string, value: any): void {
  localStorage.setItem(key, JSON.stringify(value));
}

function getDataFromStorage(key: string): any {
  const data = localStorage.getItem(key);

  return data ? JSON.parse(data) : [];
}

export { savaData, getDataFromStorage };
