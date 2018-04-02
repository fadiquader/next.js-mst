import Router from "next/router";

export default (target, ctx = {}) => {
  if (ctx.res) {
    // server
    // 303: "See other"
    ctx.res.writeHead(303, { Location: target });
    ctx.res.end();
  } else {
    console.log('redirect', target)
    // In the browser, we just pretend like this never even happened ;)
    Router.replace(target);
  }
};
