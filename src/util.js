
const notifyExecution = (url) => {
    console.log(`[!!Execute] ${url}`);
};

const notifyInvokeUpdateHandler = (url, dep) => {
    console.log(`[!!HandleAccept] ${url} : ${dep ? dep : '<self>'}`);
};

const notifyDispose = (url) => {
    console.log(`[!!Dispose] ${url}`);
};

notifyExecution(import.meta.url);

module.exports.notifyExecution = notifyExecution;

module.exports.notifyInvokeUpdateHandler = notifyInvokeUpdateHandler;

module.exports.notifyDispose = notifyDispose;
