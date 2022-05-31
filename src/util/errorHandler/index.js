function sendErrorLogRequest(logData) {
  fetch('https://jojo-api-provider.herokuapp.com/api/Logger/LogException', {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(logData),
  });
}
function formatComponentName(vm) {
  if (vm.$root === vm) return 'root';
  var name = vm._isVue ? (vm.$options && vm.$options.name) || (vm.$options && vm.$options._componentTag) : vm.name;
  return (name ? 'component <' + name + '>' : 'anonymous component') + (vm._isVue && vm.$options && vm.$options.__file ? ' at ' + (vm.$options && vm.$options.__file) : '');
}
function ErrorHandler(err, vm, info) {
  const errorData = {
    Location: window.location.pathname,
    Name: formatComponentName(vm),
    Message: err.message.toString(),
    StackTrace: err.stack.toString(),
  };
  sendErrorLogRequest(errorData);
}
export default ErrorHandler;
