export const config = [
    {
        name: 'Section',
        value: '',
        children: [] as any[],
        inputType: 'section',
        icon: 'far fa-square',
        class: 'wide',
        size: 'medium',
        view: 'always',
        get show() {

            return true;
        },
        validations: {
            size: {
                dataRefKey: 'size',
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
                ]
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
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
        size: 'medium',
        view: 'always',
        minVal: 0,
        maxVal: 50,
        helpText: '',
        isRequired: 'always',
        validations: {
            label: {
                dataRefKey: 'name'
            },
            placeholder: {
                dataRefKey: 'placeholder'
            },
            size: {
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
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
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
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
        size: 'medium',
        view: 'always',
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
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
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
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
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
        size: 'medium',
        view: 'always',
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
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
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
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
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
        size: 'medium',
        view: 'always',
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
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
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
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
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
        size: 'medium',
        view: 'always',
        minVal: 0,
        maxVal: 50,
        helpText: '',
        isRequired: 'always',
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
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
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
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
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
        size: 'medium',
        view: 'always',
        minDate: 0,
        maxDate: 50,
        helpText: '',
        isRequired: 'always',
        missing: ['Type for Date and time'],
        validations: {
            label: {
                dataRefKey: 'name'
            },
            size: {
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
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
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
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
        size: 'medium',
        view: 'always',
        minVal: 0,
        maxVal: 50,
        helpText: '',
        isRequired: 'always',
        collectPayment: false,
        missing: ['Type for Date and time'],
        validations: {
            label: {
                dataRefKey: 'name'
            },
            size: {
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
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
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
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
        size: 'medium',
        view: 'always',
        minVal: 0,
        maxVal: 50,
        helpText: '',
        isRequired: 'always',
        collectPayment: false,
        missing: ['Type for Date and time'],
        validations: {
            label: {
                dataRefKey: 'name'
            },
            size: {
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
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
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
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
        size: 'medium',
        view: 'always',
        minVal: 0,
        maxVal: 50,
        helpText: '',
        isRequired: 'always',
        collectPayment: false,
        missing: ['Type for Date and time'],
        validations: {
            label: {
                dataRefKey: 'name'
            },
            size: {
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
                ],
                dataRefKey: 'size'
            },
            dateRange: {
                minDataRefKey: 'minVal',
                maxDataRefKey: 'maxVal'
            },
            help: {
                dataRefKey: 'helpText'
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
            }
        }
    },
    {
        name: 'Radio',
        inputType: 'radio',
        icon: 'fas fa-hashtag',
        class: 'half',
        numericValue: 0,
        value: 'Option 1',
        minCharacter: 9,
        maxCharacter: 11,
        size: 'medium',
        view: 'always',
        minVal: 0,
        maxVal: 50,
        helpText: '',
        isRequired: 'always',
        collectPayment: false,
        options: [
            'Option 1',
            'Option 2',
            'Option 3'
        ],
        validations: {
            label: {
                dataRefKey: 'name'
            },
            size: {
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
                ],
                dataRefKey: 'size'
            },
            help: {
                dataRefKey: 'helpText'
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
            },
            options: true
        }
    },
    {
        name: 'Checkbox',
        inputType: 'checkbox',
        icon: 'fas fa-hashtag',
        class: 'half',
        numericValue: 0,
        value: ['Option 1'],
        minCharacter: 9,
        maxCharacter: 11,
        size: 'medium',
        view: 'always',
        minVal: 0,
        maxVal: 50,
        helpText: '',
        isRequired: 'always',
        collectPayment: false,
        missing: ['Type for Date and time'],
        options: [
            'Option 1',
            'Option 2',
            'Option 3'
        ],
        validations: {
            label: {
                dataRefKey: 'name'
            },
            size: {
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
                ],
                dataRefKey: 'size'
            },
            help: {
                dataRefKey: 'helpText'
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
            },
            options: true
        }
    },
    {
        name: 'Dropdown',
        inputType: 'dropdown',
        icon: 'fas fa-hashtag',
        class: 'half',
        numericValue: 0,
        value: 'Option 1',
        minCharacter: 9,
        maxCharacter: 11,
        size: 'medium',
        view: 'always',
        minVal: 0,
        maxVal: 50,
        helpText: '',
        isRequired: 'always',
        collectPayment: false,
        missing: ['Type for Date and time'],
        options: [
            'Option 1',
            'Option 2',
            'Option 3'
        ],
        validations: {
            label: {
                dataRefKey: 'name'
            },
            size: {
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
                ],
                dataRefKey: 'size'
            },
            help: {
                dataRefKey: 'helpText'
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
            },
            options: true
        }
    },
    {
        name: 'Rating',
        inputType: 'rating',
        icon: 'fas fa-hashtag',
        class: 'half',
        numericValue: 0,
        value: 'Option 1',
        minCharacter: 9,
        maxCharacter: 11,
        size: 'large',
        view: 'always', 
        helpText: '',
        isRequired: 'always',
        ratingOptions: {
            'Option 1': '',
            'Option 2': '',
            'Option 3': ''
        },
        ratingScale: {
            'Agree/Disagree': ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
            'Satisfied/Unsatisfied': ['Very Unsatisfied', 'Unsatisfied', 'Neutral', 'Satisfied', 'Very Satisfied'],
            'Good/Poor': ['Very Poor', 'Poor', 'Average', 'Good', 'Very Good'],
            'Scale of 1 to 5': ['1', '2', '3', '4', '5'],
            'Custom': ['1', '2', '3', '4', '5']
        },
        selectedRatingScale: 'Agree/Disagree',
        validations: {
            label: {
                dataRefKey: 'name'
            },
            size: {
                options: [
                    // {
                    //     label: 'Small',
                    //     value: 'small'
                    // },
                    // {
                    //     label: 'Medium',
                    //     value: 'medium'
                    // },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
                ],
                dataRefKey: 'size'
            },
            help: {
                dataRefKey: 'helpText'
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
            },
            ratingOptions: true
        }
    },
    {
        name: 'Repeat Section',
        value: '',
        childSection: [{
            name: 'Section',
            value: '',
            children: [] as any[],
            inputType: 'section',
            icon: 'far fa-square',
            class: 'wide',
            size: 'medium',
            view: 'always',
            get show() {
    
                return true;
            },
            validations: {
                size: {
                    dataRefKey: 'size',
                    options: [
                        {
                            label: 'Small',
                            value: 'small'
                        },
                        {
                            label: 'Medium',
                            value: 'medium'
                        },
                        {
                            label: 'Large',
                            value: 'large'
                        },
                        {
                            label: 'Extra Large',
                            value: 'extra-large'
                        }
                    ]
                },
                view: {
                    options: [
                        {
                            label: 'Always',
                            value: 'always'
                        },
                        {
                            label: 'When',
                            value: 'when'
                        },
                        {
                            label: 'Never',
                            value: 'never'
                        }
                    ],
                    dataRefKey: 'view'
                },
                required: {
                    options: [
                        {
                            label: 'Always',
                            value: 'always'
                        },
                        {
                            label: 'When',
                            value: 'when'
                        },
                        {
                            label: 'Never',
                            value: 'never'
                        }
                    ],
                    dataRefKey: 'isRequired'
                }
            }
        }] as any[],
        inputType: 'repeatSection',
        icon: 'far fa-square',
        class: 'wide',
        size: 'medium',
        view: 'always',
        validations: {
            size: {
                dataRefKey: 'size',
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
                ]
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
            }
        }
    },
    {
        name: 'File Upload',
        value: '',
        inputType: 'fileupload',
        icon: 'far fa-square',
        class: 'wide',
        size: 'medium',
        view: 'always',
        validations: {
            size: {
                dataRefKey: 'size',
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
                ]
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
            }
        }
    },
    {
        name: 'Signature',
        value: '',
        inputType: 'sign',
        icon: 'far fa-square',
        class: 'wide',
        size: 'medium',
        view: 'always',
        validations: {
            size: {
                dataRefKey: 'size',
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    // {  
                    // {
                    //     label: 'Large',
                    //     value: 'large'
                    // },
                    // {
                    //     label: 'Extra Large',
                    //     value: 'extra-large'
                    // }
                ]
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
            }
        }
    },
    {
        name: 'Payment',
        textValue: '',
        minCharacter: 0,
        maxCharacter: 100,
        value: '',
        inputType: 'payment',
        icon: 'fas fa-language',
        class: 'full',
        placeholder: '',
        size: 'medium',
        view: 'always',
        minVal: 0,
        maxVal: 50,
        helpText: '',
        isRequired: 'always',
        validations: {
            label: {
                dataRefKey: 'name'
            },
            size: {
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
                ],
                dataRefKey: 'size'
            },
            defaultValue: {
                dataRefKey: 'value'
            },
            help: {
                dataRefKey: 'helpText'
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
            }
        }
    },
    {
        name: 'Calculations',
        textValue: '',
        minCharacter: 0,
        maxCharacter: 100,
        value: '',
        inputType: 'calculations',
        icon: 'fas fa-language',
        class: 'full',
        placeholder: '',
        size: 'medium',
        view: 'always',
        minVal: 0,
        maxVal: 50,
        helpText: '',
        isRequired: 'always',
        validations: {
            label: {
                dataRefKey: 'name'
            },
            size: {
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
                ],
                dataRefKey: 'size'
            },
            defaultValue: {
                dataRefKey: 'value'
            },
            help: {
                dataRefKey: 'helpText'
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
            }
        }
    },
    {
        name: 'Page Break',
        textValue: '',
        minCharacter: 0,
        maxCharacter: 100,
        value: 'Page',
        inputType: 'break',
        icon: 'fas fa-language',
        class: 'full',
        placeholder: '',
        size: 'extra-large',
        validations: {
            pageBreakName: true
        }
    }
]