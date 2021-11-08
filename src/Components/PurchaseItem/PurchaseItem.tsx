import { useQuery } from '@apollo/client';
import React from 'react'
import { useSelector } from 'react-redux';
import { GET_HERO_PURCHASE_ITEM_FULL } from '../../GraphQL/Query';
import { FullPurchaseItemModel } from '../../Models/FullPurchaseItemModel copy';
import { ISynergy } from '../../Models/HeroStatsInterface';
import { ItemPurchaseTableModel } from '../../Models/ItemPurchaseTableModel';
import { PurchaseItemHeroModel } from '../../Models/PurchaseItemHeroModel';
import { selectCurrentHero, selectItemList } from '../../Utils/Selector';
import { GetItemIcon } from '../../Utils/Utils';
import ReactTable from "react-table";
import "react-table/react-table.css";
import './purchaseItem.scss';

export default function PurchaseItem() {

    let tableData: ItemPurchaseTableModel[] = [];
    const itemList = useSelector(selectItemList);
    const currentHero = useSelector(selectCurrentHero);
    const { error, loading, data } = useQuery(GET_HERO_PURCHASE_ITEM_FULL, {
        variables: { heroId: currentHero.id}
    });

    const getTableDataCell = (data: PurchaseItemHeroModel, totalMatch: number): ItemPurchaseTableModel | null => {
        const item = itemList.find(item => item.id === data.itemId);
        if (item) {
            const cell = new ItemPurchaseTableModel(
                item.language.displayName,
                GetItemIcon(item.name),
                Number((data.matchCount/ totalMatch * 100).toFixed(1)),
                Number((data.wins * 100).toFixed(1))
            )
            return cell;
        }

        return null;
    }


    if (data) {
        const itemPurchaseData = (data as ISynergy).heroStats.itemFullPurchase as FullPurchaseItemModel;
        const distinctItem = itemPurchaseData.events.filter((thing, index, self) =>
        index === self.findIndex((data) => (
          data.itemId === thing.itemId
        ))
      )
        tableData = distinctItem.map((data) => getTableDataCell(data, itemPurchaseData.matchCount)) as ItemPurchaseTableModel[];
    }

    return data && (
        <div className = "purchaseItem-container">
            <h2 className = "synergy-header">Item Purchase Details</h2>
            <ReactTable
                data={tableData}
                columns={[
                    {
                    Header: "Item",
                    accessor: "imageUrl",
                    className: "item-cell",
                    sortable:false,
                    Cell: (props) =>  (
                        <div className = "item-name-cell">
                            <img className = "item-icon" src= {props.original.iconUrl}
                            width={60}
                            />
                            <span className = "item-name">{props.original.name}</span>
                        </div>
                    )
                    },
                    {
                        Header: "Pick Rate",
                        className: "pick-rate-cell",
                        accessor: "pickRate",
                        Cell: (props) =>  (
                            props.original.pickRate + " %"
                        )
                    },
                    {
                        Header: "Win Rate",
                        className: "win-rate-cell",
                        accessor: "winRate",
                        Cell: (props) =>  (
                            props.original.winRate + " %"
                        )
                    }                    
                ]}
                defaultSorted={[
                    {
                      id: "pickRate",
                      desc: true
                    }
                  ]}
                defaultPageSize = {tableData.length}
                showPaginationBottom={false}
                className="-striped -highlight react-table"
                
            />            
        </div>
    ) || <></>
}
