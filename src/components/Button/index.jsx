import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'


const Button = props => {

    const {
        type, onClick, target, isDisabled, isPrimary, classesName,
        isBlock, isExternal, hasShadow, isSmall, isLarge, href, isLoading
    } = props;

    const className = [classesName];
    
    if(isPrimary) className.push('btn-primary');
    if(isLarge) className.push('btn-lg');
    if(isSmall) className.push('btn-sm');
    if(hasShadow) className.push('btn-shadow');
    if(isBlock) className.push('btn-block');

    if (isDisabled || isLoading) {
        if (isDisabled) className.push('disabled')
        return (
            <span className={className.join(" ")} style={props.style}>
                { isLoading ? (
                    <> 
                        <span className="spinner-border spinner-border-sm mx-5"></span> 
                        <span className="sr-only">Loading...</span>
                    </>
                ) : (
                    props.children
                )
                }
            </span>
        )
    }

    if (type === 'link') {
        if(isExternal) {
            <a href="href"
            className={className.join(" ")}
            style={props.style}
            target={target === '_blank' ? '_blank' : undefined}
            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            >
                {props.children}
            </a>
        }
        else {
            <Link to={href}
            className={className.join(" ")}
            style={props.style}
            onClick={onClick}>
            {props.children}
            </Link>
        }
    }


    return (
        <Button className={className.join(" ")} style={props.style} onClick={onClick}>
            {props.children}
        </Button>
    )
}

Button.propTypes = {
    type: propTypes.oneOf(['button', 'link']),
    onClick: propTypes.func,
    target: propTypes.string,
    href: propTypes.string,
    classesName: propTypes.string,
    isDisabled: propTypes.bool,
    isLoading: propTypes.bool,
    isSmall: propTypes.bool,
    isLarge: propTypes.bool,
    isBlock: propTypes.bool,
    isExternal: propTypes.bool,
    hasShadow: propTypes.bool,
}

export default Button
