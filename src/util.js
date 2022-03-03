
export const notifyExecution = (url) => {
    console.log(`[!!Execute] ${url}`);
};

export const notifyInvokeUpdateHandler = (url, dep) => {
    console.log(`[!!HandleAcceptUpdate] ${url} : ${dep ? dep : '<self>'}`);
};

export const notifyInvokeAcceptErrorHandler = (url, dep) => {
    console.log(`[!!HandleAcceptError] ${url} : ${dep ? dep : '<self>'}`);
};

export const notifyInvokeSelfAcceptErrorHandler = (url, err) => {
    console.log(`[!!HandleSelfAcceptError] ${url}: ${err}`);
};

export const notifyDispose = (url) => {
    console.log(`[!!Dispose] ${url}`);
};

notifyExecution(import.meta.url);
