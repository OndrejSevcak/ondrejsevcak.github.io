window.interopFunctions = {

    getRowCol: function (element) {
        return {
            row: element.getAttribute('data-row'),
            col: element.getAttribute('data-col')
        };
    }

}