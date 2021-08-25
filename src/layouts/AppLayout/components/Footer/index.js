import { Wrapper, Link, Logo } from './styles';

const Footer = () => {
    return (
        <Wrapper>
            <Link
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by <Logo src="/vercel.svg" alt="Vercel Logo" />
            </Link>
        </Wrapper>
    );
};

export default Footer;
