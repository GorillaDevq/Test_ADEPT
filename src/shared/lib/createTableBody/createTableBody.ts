export const createTableBody = (): Array<Company> => {
	const result: Array<Company> = [];

	for (let i = 1; i <= 100; i++) {
		result.push({ id: i, name: `Company - ${i}`, address: `Address - ${i}`, checked: false });
	}

	return result;
};
