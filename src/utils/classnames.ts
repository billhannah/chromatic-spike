export function classNames(...classes: (string | { [className: string]: boolean | undefined | null } | undefined | null)[]) {
	return classes.reduce<string[]>((acc, item) => {
		if (typeof item === 'string') {
			acc.push(item);
		} else if (item instanceof Object) {
			Object.getOwnPropertyNames(item).forEach(p => {
				if (item[p]) {
					acc.push(p);
				}
			});
		}

		return acc;
	}, []).filter(x => x).join(' ');
}
