import { createBrowserHistory } from 'history'

let history = createBrowserHistory();

history.goTo = function(url)
{
    history.replace(url);
};

export default history
