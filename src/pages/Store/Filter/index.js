import { Container } from './styles'

function Filter({ ordenacao }) {

    function handleSelect(e){
        ordenacao(e.target.value)
    }

    return(
        <Container>
            <section>
                <label>Ordenar por:</label>
                <select onChange={handleSelect}>
                    <option value="data de inclusão">Data de inclusão</option>
                    <option value="ordem alfabética">Ordem alfabética</option>
                    <option value="preço crescente">Preço crescente</option>
                    <option value="preço decrescente">Preço decrescente</option>
                </select>
            </section>
        </Container>
    )
}

export default Filter