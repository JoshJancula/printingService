const printer = require('printer');

module.exports = function (app) {

    app.get("/api/labels", function (req, res) {
        const printers = printer.getPrinters();
        res.json(printers);
    });


    app.post("/api/labels", function (req, res) {
        let returnMessage = {
            message: "",
            error: ""
        };
        let printerText = req.body.printerText;
        let printerName = req.body.printerName;
        printer.printDirect({
            data: printerText,
            printer: printerName,
            type: "RAW",
            success: function () {
                returnMessage.message = "Success";
                returnMessage.error = false;
            },
            error: function (error) {
                returnMessage.message = "Error: " + error;
                returnMessage.error = true;
            }
        });
    });

};