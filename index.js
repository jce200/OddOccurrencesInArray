function solution(arr) {
    const createOccMap = (map, nextInteger) => {
        const isMissingKey = key => map[key] === undefined;

        if (isMissingKey(nextInteger)) {
            map[nextInteger] = 0;
        }

        ++map[nextInteger];

        return map;
    }

    const isOdd = number => (number % 2) !== 0;
    const IntOccMap = arr.reduce(createOccMap, {});

    return +Object.keys(IntOccMap)
        .find(integer => isOdd(IntOccMap[integer]));
}