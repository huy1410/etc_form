import PropTypes from 'prop-types';

import { Wrapper, Title, Description } from './styles';

const Card = ({ href, children, ...restProps }) => {
    return (
        <Wrapper href={href} {...restProps}>
            {children}
        </Wrapper>
    );
};

Card.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.element).isRequired
};

Card.Title = ({ children, ...restProps }) => {
    return <Title {...restProps}>{children} &rarr;</Title>;
};

Card.Title.propTypes = {
    children: PropTypes.string.isRequired
};

Card.Description = ({ children, ...restProps }) => {
    return <Description {...restProps}>{children}</Description>;
};

Card.Description.propTypes = {
    children: PropTypes.string.isRequired
};

export default Card;
