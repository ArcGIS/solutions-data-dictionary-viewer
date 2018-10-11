/// <reference types="react" />
/**
 * An object describing how to render the list of items.
 * An `itemListRenderer` receives this object as its sole argument.
 */
export interface IItemListRendererProps<T> {
    /** The currently focused item (for keyboard interactions). */
    activeItem: T | null;
    /**
     * Array of items filtered by `itemListPredicate` or `itemPredicate`.
     * See `items` for the full list of items.
     *
     * Use `renderFilteredItems()` utility function from this library to
     * map each item in this array through `renderItem`, with support for
     * optional `noResults` and `initialContent` states.
     */
    filteredItems: T[];
    /**
     * Array of all items in the list.
     * See `filteredItems` for a filtered array based on `query` and predicate props.
     */
    items: T[];
    /**
     * The current query string.
     */
    query: string;
    /**
     * A ref handler that should be attached to the parent HTML element of the menu items.
     * This is required for the active item to scroll into view automatically.
     */
    itemsParentRef: (ref: HTMLElement | null) => void;
    /**
     * Call this function to render an item.
     * This retrieves the modifiers for the item and delegates actual rendering
     * to the owner component's `itemRenderer` prop.
     */
    renderItem: (item: T, index: number) => JSX.Element | null;
}
/** Type alias for a function that renders the list of items. */
export declare type ItemListRenderer<T> = (itemListProps: IItemListRendererProps<T>) => JSX.Element;
/**
 * `ItemListRenderer` helper method for rendering each item in `filteredItems`,
 * with optional support for `noResults` (when filtered items is empty)
 * and `initialContent` (when query is empty).
 */
export declare function renderFilteredItems(props: IItemListRendererProps<any>, noResults?: React.ReactNode, initialContent?: React.ReactNode | null): React.ReactNode;