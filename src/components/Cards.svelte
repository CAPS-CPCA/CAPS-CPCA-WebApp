<script lang='ts'>
    import { cards } from "./cards";
</script>
<div class="container">
    <div class="card">
        <h1>Prescribing</h1>
        <p>Go here if you are a physician, a nurse practitioner, a midwife or anybody who prescribes, plans to prescribe or supports prescribing medication abortion.</p>
        <a class="primary" href="/prescribing">View</a>
    </div>
    <div class="card">
        <h1>Dispensing</h1>
        <p>Go here if you are a pharmacist or any other clinician who is currently dispensing or plans to dispense Mifegymiso.</p>
        <a class="primary" href="/dispensing">View</a>
    </div>
    <div class="card">
        <h1>Supporting</h1>
        <p>Go here if you are a community worker, a social worker or a counsellor, or if you are supporting your colleagues and friends in taking medication abortion.</p>
        <a class="primary" href="/supporting">View</a>
    </div>
</div>

<style>
    .card {
        display: flex;
        flex-direction: column;
        padding: 4rem 7rem;
        gap: 3rem;
        transition: all 0.3s ease-in-out;
    }
    .card:hover {
        background-color: #2094f32a;
    }
    h1, p {
        color: #EAEAEA;
    }
</style>