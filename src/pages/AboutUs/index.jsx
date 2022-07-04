import { HeadingPage } from '~/components';
import config from '~/config';

function AboutUs() {
    const breadcrumb = [
        {
            name: 'Home',
            path: config.routes.home,
        },
        {
            name: 'Pages',
            path: config.routes.pages,
        },
        {
            name: 'About us',
            path: config.routes.aboutUs,
        },
    ];

    return (
        <HeadingPage title="About us" breadcrumb={breadcrumb}>
            <div>AboutUs</div>
        </HeadingPage>
    );
}

export default AboutUs;
