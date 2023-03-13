import { createSelector } from 'reselect';

export const getEntities = (state) => state.repositories.entities;

export const getPageCount = createSelector(
    [getEntities],
    (entities) => {
        const itemsPerPage = 3;
        return Math.ceil(entities.length / itemsPerPage);
    }
);
