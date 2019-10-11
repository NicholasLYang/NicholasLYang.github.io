import createBrowserHistory from 'history/createBrowserHistory'

let history = createBrowserHistory();

history.goTo = function(url)
{
    history.replace(url);
};

export default history