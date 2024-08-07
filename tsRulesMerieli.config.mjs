export default [
    {
        name: 'tsRulesMerieli',
        files: ['**/*.ts'],
        rules: {
            eqeqeq: 'error',
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: 'default',
                    format: ['camelCase'],
                },
                {
                    selector: 'variable',
                    format: ['camelCase'],
                },
                {
                    selector: 'function',
                    format: ['camelCase'],
                },
                {
                    selector: 'class',
                    format: ['PascalCase'],
                },
                {
                    selector: 'interface',
                    format: ['PascalCase'],
                    custom: {
                        regex: '^I[A-Z]',
                        match: false,
                    },
                },
                {
                    selector: 'typeAlias',
                    format: ['PascalCase'],
                },
                {
                    selector: 'enum',
                    format: ['PascalCase'],
                },
                {
                    selector: 'enumMember',
                    format: ['UPPER_CASE'],
                },
            ],
            'no-useless-concat': 'error',
            '@typescript-eslint/array-type': 'error',
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/no-explicit-any': 'warn',
            'sort-imports': [
                'error',
                {
                    ignoreCase: false,
                    ignoreDeclarationSort: false,
                    ignoreMemberSort: false,
                    memberSyntaxSortOrder: [
                        'none',
                        'all',
                        'multiple',
                        'single',
                    ],
                    allowSeparatedGroups: true,
                },
            ],
            'no-restricted-syntax': [
                'error',
                {
                    selector: 'ExportDefaultDeclaration',
                    message: 'Prefer named exports',
                }, // Bloqueia export default
                {
                    selector: 'ImportDeclaration[specifiers.length = 0]',
                    message: 'Empty imports are not allowed',
                }, // Bloqueia imports vazios
            ],
        },
    },
];
