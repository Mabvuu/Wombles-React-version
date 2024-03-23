const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/submit-form', createProxyMiddleware({ 
        target: 'http://localhost:3000', 
        onError: (err, req, res) => {
            console.error('Proxy error:', err);
            res.writeHead(500, {
                'Content-Type': 'text/plain'
            });
            res.end('Proxy error occurred');
        }
    }));
};

