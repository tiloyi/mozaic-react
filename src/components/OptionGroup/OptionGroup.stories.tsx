import React, { useCallback, useState } from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import OptionButton from '../OptionButton';
import OptionGroup from './OptionGroup';
import { IOptionGroupProps, TOptionGroupValue } from './OptionGroup.types';
import { languages } from './OptionGroup.fixtures';
import './OptionGroup.stories.scss';
import OptionCard from '../OptionCard';
import { View } from '../index';
import useOptionGroupValues from './useOptionGroupValues';

const ControlsTemplate: Story<IOptionGroupProps> = args => (
    <OptionGroup {...args} onClick={action('Click')}>
        <div className="mc-option-group">
            {languages.map(language => (
                <OptionButton key={language.toLowerCase()} value={language.toLowerCase()}>
                    {language}
                </OptionButton>
            ))}
        </div>
    </OptionGroup>
);

export const Controls = ControlsTemplate.bind({});

Controls.args = {
    value: languages[0].toLowerCase()
};

const ExampleTemplateOptionButton: Story = () => {
    const [language, setLanguage] = useState<TOptionGroupValue | undefined>(languages[0].toLowerCase());

    const handleChange = useCallback((nextValue?: TOptionGroupValue): void => {
        setLanguage(nextValue);
    }, []);

    return (
        <OptionGroup value={language} onClick={handleChange}>
            <div className="mc-option-group">
                {languages.map(lang => (
                    <OptionButton
                        className="option-button-group-item"
                        key={lang.toLowerCase()}
                        value={lang.toLowerCase()}
                    >
                        {lang}
                    </OptionButton>
                ))}
            </div>
        </OptionGroup>
    );
};

export const ExampleOptionButton = ExampleTemplateOptionButton.bind({});

ExampleOptionButton.args = {
    name: {
        table: {
            disable: true
        }
    },
    value: {
        table: {
            disable: true
        }
    },
    onClick: {
        table: {
            disable: true
        }
    }
};

const MultipleSelectedOptionButtonTemplate: Story = () => {
    const [values, { toggle }] = useOptionGroupValues();

    const handleClick = useCallback(
        (value?: TOptionGroupValue) => {
            if (value) {
                toggle(value);
            }
        },
        [toggle]
    );

    return (
        <OptionGroup mode="multi" onClick={handleClick} values={values}>
            <div className="mc-option-group">
                {languages.map(lang => (
                    <OptionButton
                        className="option-button-group-item"
                        key={lang.toLowerCase()}
                        value={lang.toLowerCase()}
                    >
                        {lang}
                    </OptionButton>
                ))}
            </div>
        </OptionGroup>
    );
};

export const MultipleSelectedOptionButton = MultipleSelectedOptionButtonTemplate.bind({});

MultipleSelectedOptionButton.argTypes = {
    name: {
        table: {
            disable: true
        }
    },
    value: {
        table: {
            disable: true
        }
    },
    onClick: {
        table: {
            disable: true
        }
    }
};

const ExampleOptionCardTemplate: Story = () => {
    const [language, setLanguage] = useState<TOptionGroupValue | undefined>(languages[0].toLowerCase());

    const handleClick = useCallback((nextValue?: TOptionGroupValue): void => {
        setLanguage(nextValue);
    }, []);

    return (
        <OptionGroup value={language} onClick={handleClick} mode="single">
            <div className="mc-option-group">
                {languages.map(lang => (
                    <OptionCard className="story-option-card" key={lang.toLowerCase()} value={lang.toLowerCase()}>
                        <View margin="mu150">{lang}</View>
                    </OptionCard>
                ))}
            </div>
        </OptionGroup>
    );
};

export const ExampleOptionCard = ExampleOptionCardTemplate.bind({});

ExampleOptionCard.argTypes = {
    name: {
        table: {
            disable: true
        }
    },
    value: {
        table: {
            disable: true
        }
    },
    onClick: {
        table: {
            disable: true
        }
    }
};

const MultipleSelectedOptionCardTemplate: Story = () => {
    const [values, { add, remove }] = useOptionGroupValues();

    const handleClick = useCallback(
        (value?: TOptionGroupValue) => {
            if (value) {
                if (values.includes(value)) {
                    remove(value);
                } else {
                    add(value);
                }
            }
        },
        [add, remove, values]
    );

    return (
        <OptionGroup mode="multi" onClick={handleClick} values={values}>
            <div className="mc-option-group">
                {languages.map(lang => (
                    <OptionCard className="story-option-card" key={lang.toLowerCase()} value={lang.toLowerCase()}>
                        <View margin="mu150">{lang}</View>
                    </OptionCard>
                ))}
            </div>
        </OptionGroup>
    );
};

export const MultipleSelectedOptionCard = MultipleSelectedOptionCardTemplate.bind({});

MultipleSelectedOptionCard.argTypes = {
    name: {
        table: {
            disable: true
        }
    },
    value: {
        table: {
            disable: true
        }
    },
    onClick: {
        table: {
            disable: true
        }
    }
};
