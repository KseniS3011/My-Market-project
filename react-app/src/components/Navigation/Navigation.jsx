import styled from "styled-components";
import Link from '../Link/Link';

const Navigation1 = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
padding-bottom: 8px;
gap: 4px;
font-weight: 400;
font-size: 16px;
line-height: 19px;
margin: 98px 0 0 0;

@media (max-width: 360px) {
        margin: 65px 0 0 0; 
}
`;

const NavigationItem = styled.div`
display: flex;
gap: 4px;
`;


function Navigation(props) {

    let { list } = props;
    return (
        <nav>
            <Navigation1>
                {
                    list.map(function ({ text, link }, index) {

                        if (index) {

                            return (

                                <NavigationItem key={text}>
                                     <div>{'>'}</div>
                                    <Link text={text} link={link} index={index} />
                                </NavigationItem>
                            )
                        } else {
                            return (

                                <NavigationItem key={text}>
                                    <Link text={text} link={link} index={index} />
                                </NavigationItem>
                            )
                        }
                    })
                }
            </Navigation1>
        </nav>
    );
}

export default Navigation;