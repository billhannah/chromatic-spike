import * as React from 'react';
import { classNames } from '../utils/classnames';

import './button.css';

export enum ButtonStyle {
	Primary,
	Ghost,
}

export interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
	acceptanceTestTargetId: string;
	/**
	 * Defines the button type: 'submit' or 'button'
	 * Default button type is 'button'
	 */
	buttonStyle?: ButtonStyle;
	submit?: boolean;
	isLoading?: boolean;
	isBlocked?: boolean;
}

export function getBrandingClass(buttonStyle: ButtonStyle) {
	return buttonStyle === ButtonStyle.Primary
		? 'brand-primary-bg brand-primary-hover'
		: `ghost brand-primary-border brand-primary-hover brand-primary-border-hover brand-primary-text`;
}

export const Button: React.StatelessComponent<IButtonProps> = (props) => {
	const { submit, isLoading, children, buttonStyle = ButtonStyle.Primary, className = '', acceptanceTestTargetId, isBlocked, ...buttonProps } = props;
	const brandingClass = getBrandingClass(buttonStyle);

	return (
		<button
			className={classNames( className, `button`, isBlocked ? `blocked` : brandingClass )}
			type={submit ? 'submit' : 'button'}
			data-pp-at-target={acceptanceTestTargetId}
			disabled={isLoading || isBlocked}
			{...buttonProps}
		>
			<span className={isLoading ? `hidden-text`: ''}>{children}</span>
			{isLoading && <div className="loading-spinner" />}
		</button>
	);
};
