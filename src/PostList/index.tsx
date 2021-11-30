import React, {FC,ReactChild} from 'react';


export type PostListItemProps = {children:ReactChild};
export const PostListItem : FC<PostListItemProps> = ({children}) => {

    return (<>{children}</>);
}

export type PostListProps = {children:ReactChild};

export const PostList : FC<{children:PostListProps}> = ({children}) => {
    return (
        <table className="wp-list-table widefat fixed striped posts">
            <thead>
                <tr>
                    <td id="cb" className="manage-column column-cb check-column">
                        <label className="screen-reader-text" htmlFor="cb-select-all-1">Select All</label>
                        <input id="cb-select-all-1" type="checkbox" />
                    </td>
                    <th scope="col" id="title" className="manage-column column-title column-primary sortable desc">
                        <span>Title</span>
                    </th>
                    <th scope="col" id="author" className="manage-column column-author">Author</th>
                    <th scope="col" id="categories" className="manage-column column-categories">Categories</th>
                    <th scope="col" id="tags" className="manage-column column-tags">Tags</th>
                    <th scope="col" id="comments" className="manage-column column-comments num sortable desc">
                        <span>
                            <span className="vers comment-grey-bubble" title="Comments">
                                <span className="screen-reader-text">Comments</span>
                            </span>
                        </span>
                    </th>
                    <th scope="col" id="date" className="manage-column column-date sortable asc">
                        <a href="#">
                            <span>Date</span><span className="sorting-indicator"></span>
                        </a>
                    </th>
                </tr>
            </thead>
            <tbody id="the-list">
                {children}
            </tbody>
        </table>
    )
}
