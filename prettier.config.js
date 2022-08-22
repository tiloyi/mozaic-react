module.exports = {
    arrowParens: 'avoid',
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'none',
    printWidth: 120,
    endOfLine: 'auto',
    overrides: [
        {
            files: ['*.scss', '.css'],
            options: {
                singleQuote: false
            }
        }
    ]
};
