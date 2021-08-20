const tryPromise = function () {
    return new Promise((resolve, reject) => {
        const condition = false;
        if (condition) {
            setTimeout(() => {
                resolve("ok");
            }, 2000);
        } else {
            setTimeout(() => {
                reject('not ok')
            }, 2000);
        }
    });
}

const tryAsync = async function () {
    try {
        const result = await tryPromise();
        console.log(result);
    } catch (e) {
        console.log(e);
    }
}

tryAsync();
