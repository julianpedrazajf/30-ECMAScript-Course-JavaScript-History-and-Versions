try {
    hello();
} catch (error) {
    console.log(error);
}

try {
    aniotherFn();
} catch {
    console.log('Esto es un error');
}