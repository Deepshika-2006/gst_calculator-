function calculateGST() {

    let amount = parseFloat(
        document.getElementById("amount").value
    );

    let rate = parseFloat(
        document.getElementById("gstRate").value
    );

    let type = document.getElementById("calcType").value;

    // Validation
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    if (isNaN(rate) || rate < 0) {
        alert("Please enter a valid GST percentage.");
        return;
    }

    let gstAmount;
    let totalAmount;

    if (type === "exclusive") {

        gstAmount = (amount * rate) / 100;

        totalAmount = amount + gstAmount;

    } else {

        gstAmount =
            amount -
            (amount * 100 / (100 + rate));

        totalAmount = amount;
    }

    let cgst = gstAmount / 2;
    let sgst = gstAmount / 2;

    document.getElementById("gstAmount").innerText =
        "₹" + gstAmount.toFixed(2);

    document.getElementById("cgst").innerText =
        "₹" + cgst.toFixed(2);

    document.getElementById("sgst").innerText =
        "₹" + sgst.toFixed(2);

    document.getElementById("totalAmount").innerText =
        "₹" + totalAmount.toFixed(2);
}

function resetFields() {

    document.getElementById("amount").value = "";
    document.getElementById("gstRate").value = "";
    document.getElementById("calcType").value = "exclusive";

    document.getElementById("gstAmount").innerText = "₹0.00";
    document.getElementById("cgst").innerText = "₹0.00";
    document.getElementById("sgst").innerText = "₹0.00";
    document.getElementById("totalAmount").innerText = "₹0.00";
}

function copyResult() {

    let result = `
GST Amount: ${document.getElementById("gstAmount").innerText}
CGST: ${document.getElementById("cgst").innerText}
SGST: ${document.getElementById("sgst").innerText}
Total Amount: ${document.getElementById("totalAmount").innerText}
`;

    navigator.clipboard.writeText(result);

    alert("Result copied successfully!");
}