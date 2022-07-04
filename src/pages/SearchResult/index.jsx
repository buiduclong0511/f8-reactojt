import { HeadingPage } from '~/components';
import config from '~/config';

function SearchResult() {
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
            name: 'Shop list',
            path: config.routes.searchResult,
        },
    ];

    return (
        <HeadingPage title="Shop list" breadcrumb={breadcrumb}>
            <div>SearchResult</div>
        </HeadingPage>
    );
}

export default SearchResult;
