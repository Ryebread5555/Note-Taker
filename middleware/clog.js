const clog = (req, res, next) => {
  const fgGreen = '\x1b[32m';
    switch (req.method) {
      case 'GET': {
        console.info(`📗 ${fgGreen}${req.method} request to ${req.path}`);
        break;
      }
      case 'POST': {
        console.info(`📘 ${fgGreen}${req.method} request to ${req.path}`);
        break;
      }
      default:
        console.log(`📙${fgGreen}${req.method} request to ${req.path}`);
    }
  
    next();
  };
  
  exports.clog = clog;