import { Container } from './styles'

function Filter({ ordenacao, search, setSearch }) {

    function handleSelect(e){
        ordenacao(e.target.value)
    }

    function handleSearchChange(e){
        setSearch(e.target.value)
    }

    return(
        <Container>
            <section>
                <label>Ordenar por:</label>
                <select onChange={handleSelect}>
                    <option value="data de inclusão">Data de Inclusão</option>
                    <option value="ordem alfabética">Ordem Alfabética</option>
                    <option value="preço crescente">Preço Crescente</option>
                    <option value="preço decrescente">Preço Decrescente</option>
                </select>
            </section>

            <section>
                <label>Pesquise um produto específico:</label>
                <input
                    type="text"
                    id="searchInput"
                    value={search}
                    onChange={handleSearchChange}
                    placeholder="Nome do produto"
                />
            </section>
        </Container>
    )
}

export default Filter