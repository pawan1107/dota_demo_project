import { connect } from 'react-redux';
import { ItemPurchaseTableModel } from '../../Models/ItemPurchaseTableModel';
import { PurchaseItemHeroModel } from '../../Models/PurchaseItemHeroModel';
import { GetItemIcon } from '../../Utils/Utils';
import ReactTable from "react-table";
import "react-table/react-table.css";
import './purchaseItem.scss';

function PurchaseItem(props) {

    let tableData: ItemPurchaseTableModel[] = [];

    // Generate table individual cell data
    const getTableDataCell = (data: PurchaseItemHeroModel, totalMatch: number): ItemPurchaseTableModel | null => {
        const item = props.itemList.find(item => item.id === data.itemId);
        if (item) {
            return new ItemPurchaseTableModel(
                item.language.displayName,
                GetItemIcon(item.name),
                Number((data.matchCount/ totalMatch * 100).toFixed(1)),
                Number((data.wins * 100).toFixed(1))
            )
        }

        return null;
    }
    
    if (props.itemData) {
        const itemPurchaseData = props.itemData;
        const distinctItem = itemPurchaseData.events.filter((thing, index, self) =>
        index === self.findIndex((data) => (
          data.itemId === thing.itemId
        ))
      )
        tableData = distinctItem.map((data) => getTableDataCell(data, itemPurchaseData.matchCount)) as ItemPurchaseTableModel[];
    }

    return (
        props.itemData && (
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
                        Cell: (data) =>  (
                            <div className = "item-name-cell">
                            <img className = "item-icon" alt= {"img-" + data.original.name} src= {data.original.iconUrl} width={60}/>
                                <span className = "item-name">{data.original.name}</span>
                            </div>
                        ),
                        width: 240
                    },
                    {
                        Header: "Pick Rate",
                        className: "pick-rate-cell",
                        accessor: "pickRate",
                        Cell: (data) =>  (
                            data.original.pickRate + " %"
                        )
                    },
                    {
                        Header: "Win Rate",
                        className: "win-rate-cell",
                        accessor: "winRate",
                        Cell: (data) =>  (
                            data.original.winRate + " %"
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
    )) || <></>
}



function mapState(state) {
    const itemList = state.constantData.items;
    const itemData = state.heroData?.itemData;
    return { itemList, itemData};
}

export default connect(mapState, null)(PurchaseItem);
