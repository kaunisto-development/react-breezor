import './OffersTabs.css';

export default function OfferTabs({id,title, active, setSelected}) {
    return (
        <li className={active ? 'offerTabs active' : 'offerTabs'} onClick={() => setSelected(id)}>
            {title}
        </li>
    )
}
