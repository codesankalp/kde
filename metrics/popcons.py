import json
from os import path


def popcons_stats(file_path: str):
    file_name = path.basename(file_path)
    if file_name == "arch.json":
        return arch_stats(file_path)
    elif file_name == "debian.json":
        return debian_stats(file_path)
    elif file_name == "ubuntu.json":
        return ubuntu_stats(file_path)


def arch_stats(file_path: str):
    orig_data = get_data(file_path)
    arch_name = []
    arch_samples = []
    arch_count = []
    arch_popularity = []
    arch_startMonth = []
    arch_endMonth = []
    for item in orig_data:
        arch_name.append(item.get("name", ""))
        arch_samples.append(item.get("samples", 0))
        arch_count.append(item.get("count", 0))
        arch_popularity.append(item.get("popularity", 0))
        arch_startMonth.append(item.get("startMonth", 0))
        arch_endMonth.append(item.get("endMonth", 0))
    return {
        "arch_name": arch_name,
        "arch_samples": arch_samples,
        "arch_count": arch_count,
        "arch_popularity": arch_popularity,
        "arch_startMonth": arch_startMonth,
        "arch_endMonth": arch_endMonth,
    }


def debian_stats(file_path: str):
    orig_data = get_data(file_path)
    debian_name = []
    debian_inst = []
    debian_vote = []
    debian_old = []
    debian_recent = []
    for item in orig_data:
        debian_name.append(item.get("name", ""))
        debian_inst.append(item.get("inst", 0))
        debian_vote.append(item.get("vote", 0))
        debian_old.append(item.get("old", 0))
        debian_recent.append(item.get("recent", 0))
    return {
        "debian_name": debian_name,
        "debian_inst": debian_inst,
        "debian_vote": debian_vote,
        "debian_old": debian_old,
        "debian_recent": debian_recent,
    }


def ubuntu_stats(file_path: str):
    orig_data = get_data(file_path)
    ubuntu_name = []
    ubuntu_inst = []
    ubuntu_vote = []
    ubuntu_old = []
    ubuntu_recent = []
    for item in orig_data:
        ubuntu_name.append(item.get("name", ""))
        ubuntu_inst.append(item.get("inst", 0))
        ubuntu_vote.append(item.get("vote", 0))
        ubuntu_old.append(item.get("old", 0))
        ubuntu_recent.append(item.get("recent", 0))
    return {
        "ubuntu_name": ubuntu_name,
        "ubuntu_inst": ubuntu_inst,
        "ubuntu_vote": ubuntu_vote,
        "ubuntu_old": ubuntu_old,
        "ubuntu_recent": ubuntu_recent,
    }


def get_data(file_path: str):
    with open(file_path) as f:
        orig_data = json.loads(f.read())
    return orig_data
