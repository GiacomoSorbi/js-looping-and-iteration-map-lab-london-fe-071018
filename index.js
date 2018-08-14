// Code your solution in this file.
const lowerCaseDrivers = drivers => drivers.map(d=>d.toLowerCase());
const attributesToPhrase = drivers => drivers.map(d=>`${d.name} is from ${d.hometown}`);