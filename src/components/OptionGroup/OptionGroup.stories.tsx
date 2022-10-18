import React, { useCallback, useState } from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import View from '../View';
import { OptionButton } from '../OptionButton';
import { OptionCard } from '../OptionCard';
import OptionGroup from './OptionGroup';
import { IOptionGroupProps, TOptionGroupValue } from './OptionGroup.types';
import { languages } from './OptionGroup.fixtures';
import useOptionGroupValues from './useOptionGroupValues';
import './OptionGroup.stories.scss';

const ControlsTemplate: Story<IOptionGroupProps> = args => (
    <OptionGroup {...args} onChange={action('Change')}>
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
        <OptionGroup value={language} onChange={handleChange}>
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
    onChange: {
        table: {
            disable: true
        }
    }
};

const MultipleSelectedOptionButtonTemplate: Story = () => {
    const [values, { toggle }] = useOptionGroupValues();

    const handleChange = useCallback(
        (value?: TOptionGroupValue) => {
            if (value) {
                toggle(value);
            }
        },
        [toggle]
    );

    return (
        <OptionGroup mode="multi" onChange={handleChange} values={values}>
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
    onChange: {
        table: {
            disable: true
        }
    }
};

const ExampleOptionCardTemplate: Story = () => {
    const [language, setLanguage] = useState<TOptionGroupValue | undefined>(languages[0].toLowerCase());

    const handleChange = useCallback((nextValue?: TOptionGroupValue): void => {
        setLanguage(nextValue);
    }, []);

    return (
        <OptionGroup value={language} onChange={handleChange} mode="single">
            <div className="mc-option-group">
                {languages.map(lang => (
                    <OptionCard className="story-option-card" key={lang.toLowerCase()} value={lang.toLowerCase()}>
                        <View margin="mu100">{lang}</View>
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
    onChange: {
        table: {
            disable: true
        }
    }
};

const MultipleSelectedOptionCardTemplate: Story = () => {
    const [values, { toggle }] = useOptionGroupValues();

    const handleChange = useCallback(
        (value?: TOptionGroupValue) => {
            if (value) {
                toggle(value);
            }
        },
        [toggle]
    );

    return (
        <OptionGroup mode="multi" onChange={handleChange} values={values}>
            <div className="mc-option-group">
                {languages.map(lang => (
                    <OptionCard className="story-option-card" key={lang.toLowerCase()} value={lang.toLowerCase()}>
                        <View margin="mu100">{lang}</View>
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
    onChange: {
        table: {
            disable: true
        }
    }
};
