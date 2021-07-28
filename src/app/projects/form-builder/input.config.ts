export const config = [
    {
        name: 'Section',
        value: '',
        children: [] as any[],
        inputType: 'section',
        icon: 'far fa-square',
        class: 'wide',
        size: 'Small',
        validations: {
            size: {
                options: [
                    'Small',
                    'Medium',
                    'Large',
                    'Extra Large'
                ]
            }
        }
    },
    {
        name: 'Text',
        textValue: '',
        minCharacter: 0,
        maxCharacter: 100,
        value: '', inputType: 'string',
        icon: 'fas fa-language',
        class: 'full',
        placeholder: '',
        size: 'Small',
        minVal: 0,
        maxVal: 50,
        helpText: '',
        isRequired: true,
        validations: {
            label: {
                dataRefKey: 'name'
            },
            placeholder: {
                dataRefKey: 'placeholder'
            },
            size: {
                options: [
                    'Small',
                    'Medium',
                    'Large',
                    'Extra Large'
                ],
                dataRefKey: 'size'
            },
            defaultValue: {
                dataRefKey: 'value'
            },
            range: {
                minDataRefKey: 'minVal',
                maxDataRefKey: 'maxVal'
            },
            help: {
                dataRefKey: 'helpText'
            },
            isRequired: {
                label: 'Require this field',
                options: {
                    Always: '',
                    When: '',
                }
            }
        }
    },
    {
        name: 'First Name',
        textValue: '',
        minCharacter: 0,
        maxCharacter: 100,
        value: '',
        inputType: 'string',
        icon: 'fas fa-language',
        class: 'full',
        placeholder: '',
        size: 'Small',
        minVal: 0,
        maxVal: 50,
        helpText: '',
        validations: {
            label: {
                dataRefKey: 'name'
            },
            placeholder: {
                dataRefKey: 'placeholder'
            },
            size: {
                options: [
                    'Small',
                    'Medium',
                    'Large',
                    'Extra Large'
                ],
                dataRefKey: 'size'
            },
            defaultValue: {
                dataRefKey: 'value'
            },
            range: {
                minDataRefKey: 'minVal',
                maxDataRefKey: 'maxVal'
            },
            help: {
                dataRefKey: 'helpText'
            }
        }
    },
    {
        name: 'Last Name',
        textValue: '',
        minCharacter: 0,
        maxCharacter: 100,
        value: '',
        inputType: 'string',
        icon: 'fas fa-language',
        class: 'full',
        placeholder: '',
        size: 'Small',
        minVal: 0,
        maxVal: 50,
        helpText: '',
        validations: {
            label: {
                dataRefKey: 'name'
            },
            placeholder: {
                dataRefKey: 'placeholder'
            },
            size: {
                options: [
                    'Small',
                    'Medium',
                    'Large',
                    'Extra Large'
                ],
                dataRefKey: 'size'
            },
            defaultValue: {
                dataRefKey: 'value'
            },
            range: {
                minDataRefKey: 'minVal',
                maxDataRefKey: 'maxVal'
            },
            help: {
                dataRefKey: 'helpText'
            }
        }
    },
    {
        name: 'Number',
        inputType: 'number',
        icon: 'fas fa-hashtag',
        class: 'half',
        placeholder: '',
        numericValue: 0,
        value: undefined,
        size: 'Small',
        minVal: 0,
        maxVal: 50,
        helpText: '',
        validations: {
            label: {
                dataRefKey: 'name'
            },
            placeholder: {
                dataRefKey: 'placeholder'
            },
            size: {
                options: [
                    'Small',
                    'Medium',
                    'Large',
                    'Extra Large'
                ],
                dataRefKey: 'size'
            },
            defaultValue: {
                dataRefKey: 'value'
            },
            range: {
                minDataRefKey: 'minVal',
                maxDataRefKey: 'maxVal'
            },
            help: {
                dataRefKey: 'helpText'
            }
        }
    },
    {
        name: 'Phone Number',
        inputType: 'number',
        icon: 'fas fa-hashtag',
        class: 'half',
        placeholder: '',
        numericValue: 0,
        value: undefined,
        minCharacter: 9,
        maxCharacter: 11,
        size: 'Small',
        minVal: 0,
        maxVal: 50,
        helpText: '',
        isRequired: true,
        missing: ['Type for us and international'],
        validations: {
            label: {
                dataRefKey: 'name'
            },
            placeholder: {
                dataRefKey: 'placeholder'
            },
            size: {
                options: [
                    'Small',
                    'Medium',
                    'Large',
                    'Extra Large'
                ],
                dataRefKey: 'size'
            },
            defaultValue: {
                dataRefKey: 'value'
            },
            range: {
                minDataRefKey: 'minVal',
                maxDataRefKey: 'maxVal'
            },
            help: {
                dataRefKey: 'helpText'
            },
            isRequired: {
                label: 'Require this field',
                options: {
                    Always: '',
                    When: '',
                }
            }
        }
    },
    {
        name: 'Date',
        inputType: 'date',
        icon: 'fas fa-hashtag',
        class: 'half',
        numericValue: 0,
        value: undefined,
        minCharacter: 9,
        maxCharacter: 11,
        size: 'Small',
        minDate: 0,
        maxDate: 50,
        helpText: '',
        isRequired: true,
        missing: ['Type for Date and time'],
        validations: {
            label: {
                dataRefKey: 'name'
            },
            size: {
                options: [
                    'Small',
                    'Medium',
                    'Large',
                    'Extra Large'
                ],
                dataRefKey: 'size'
            },
            defaultValue: {
                dataRefKey: 'value'
            },
            dateRange: {
                minDataRefKey: 'minDate',
                maxDataRefKey: 'maxDate'
            },
            help: {
                dataRefKey: 'helpText'
            }
        }
    },
    {
        name: 'Currency',
        inputType: 'number',
        icon: 'fas fa-hashtag',
        class: 'half',
        numericValue: 0,
        value: undefined,
        minCharacter: 9,
        maxCharacter: 11,
        size: 'Small',
        minVal: 0,
        maxVal: 50,
        helpText: '',
        isRequired: true,
        collectPayment: false,
        missing: ['Type for Date and time'],
        validations: {
            label: {
                dataRefKey: 'name'
            },
            size: {
                options: [
                    'Small',
                    'Medium',
                    'Large',
                    'Extra Large'
                ],
                dataRefKey: 'size'
            },
            defaultValue: {
                dataRefKey: 'value'
            },
            collectPayment: {
                dataRefKey: 'collectPayment'
            },
            range: {
                minDataRefKey: 'minVal',
                maxDataRefKey: 'maxVal'
            },
            help: {
                dataRefKey: 'helpText'
            }
        }
    },
    {
        name: 'Price',
        inputType: 'number',
        icon: 'fas fa-hashtag',
        class: 'half',
        numericValue: 0,
        value: undefined,
        minCharacter: 9,
        maxCharacter: 11,
        size: 'Small',
        minVal: 0,
        maxVal: 50,
        helpText: '',
        isRequired: true,
        collectPayment: false,
        missing: ['Type for Date and time'],
        validations: {
            label: {
                dataRefKey: 'name'
            },
            size: {
                options: [
                    'Small',
                    'Medium',
                    'Large',
                    'Extra Large'
                ],
                dataRefKey: 'size'
            },
            defaultValue: {
                dataRefKey: 'value'
            },
            range: {
                minDataRefKey: 'minVal',
                maxDataRefKey: 'maxVal'
            },
            help: {
                dataRefKey: 'helpText'
            }
        }
    }
]