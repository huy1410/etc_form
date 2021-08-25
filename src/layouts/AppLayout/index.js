import PropTypes from 'prop-types';

import Footer from './components/Footer';
import { Wrapper, ContentWrapper, Content } from './styles';

const AppLayout = ({ children }) => {
    return (
        <Wrapper>
            <ContentWrapper>
                <Content>{children}</Content>
            </ContentWrapper>
            <Footer />
        </Wrapper>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default AppLayout;
