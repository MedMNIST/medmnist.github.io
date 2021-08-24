const site = {
    copyright: "MedMNIST Team",
    year: "2020-",
    url: "https://github.com/MedMNIST/medmnist.github.io",
    lastUpdated: "Aug, 2021",
};

const about = {
    title: "MedMNIST v2: A Large-Scale Lightweight Benchmark for 2D and 3D Biomedical Image Classification",
    authors: [
        {
            name: "Jiancheng Yang",
            href: "https://jiancheng-yang.com/"
        },
        {
            name: "Rui Shi",
        },
        {
            name: "Donglai Wei",
            href: "https://donglaiw.github.io/"
        },
        {
            name: "Zequan Liu",
        },
        {
            name: "Lin Zhao",
        },
        {
            name: "Bilian Ke",
            href: "https://scholar.google.com/citations?user=2cX5y8kAAAAJ"
        },
        {
            name: "Hanspeter Pfister",
            href: "https://scholar.google.com/citations?user=VWX-GMAAAAAJ"
        },
        {
            name: "Bingbing Ni",
            href: "https://scholar.google.com/citations?user=eUbmKwYAAAAJ"
        },
    ],
    affiliations: [
        "Shanghai Jiao Tong University, Shanghai, China",
        "Harvard University, Cambridge, MA",
        "RWTH Aachen University, Aachen, Germany",
        "Fudan Institute of Metabolic Diseases, Zhongshan Hospital, Fudan University, Shanghai, China",
        "Shanghai General Hospital, Shanghai Jiao Tong University School of Medicine, Shanghai, China"
    ],
    materials: [
        {
            name: "Paper",
            where: "arXiv",
            href: "#TODO"
        },
        {
            name: "Code",
            where: "GitHub",
            href: "https://github.com/MedMNIST/MedMNIST"
        },
        {
            name: "Dataset",
            where: "Zenodo",
            href: "https://doi.org/10.5281/zenodo.5208230"
        },
        {
            name: "MedMNIST v1",
            where: "ISBI'21",
            href: "https://medmnist.github.io/v1"
        }
    ],
    teaser: "assets/v2/imgs/overview.jpg"
};

const medmnist2d = [
    {
        dataset: "PathMNIST",
        modality: "Colon Pathology",
        task: "Multi-Class (9)",
        samples: "107,180",
        splits: "89,996 / 10,004 / 7,180",
        license: "CC BY 4.0",
        licenseURL: "https://creativecommons.org/licenses/by/4.0/",
        citations: [
            'Jakob Nikolas Kather, Johannes Krisam, et al., "Predicting survival from colorectal cancer histology slides using deep learning: A retrospective multicenter study," PLOS Medicine, vol. 16, no. 1, pp. 1–22, 01 2019.'
        ]
    },
    {
        dataset: "ChestMNIST",
        modality: "Chest X-ray",
        task: "Multi-Label (14) Binary-Class (2)",
        samples: "112,120",
        splits: "78,468 / 11,219 / 22,433",
        license: "CC0 1.0",
        licenseURL: "https://creativecommons.org/publicdomain/zero/1.0/",
        citations: [
            'Xiaosong Wang, Yifan Peng, et al., "Chest x-ray8: Hospital-scale chest x-ray database and benchmarks on weakly-supervised classification and localization of common thorax diseases," in CVPR, 2017, pp. 3462–3471.'
        ]
    },
    {
        dataset: "DermaMNIST",
        modality: "Dermatoscope",
        task: "Multi-Class (7)",
        samples: "10,015",
        splits: "7,007 / 1,003 / 2,005",
        license: "CC BY-NC 4.0",
        licenseURL: "https://creativecommons.org/licenses/by-nc/4.0/",
        citations: [
            'Philipp Tschandl, Cliff Rosendahl, et al., "The ham10000 dataset, a large collection of multisource dermatoscopic images of common pigmented skin lesions," Scientific data, vol. 5, pp. 180161, 2018.',
            'Noel Codella, Veronica Rotemberg, et al., “Skin Lesion Analysis Toward Melanoma Detection 2018: A Challenge Hosted by the International Skin Imaging Collaboration (ISIC)”, 2018, arXiv:1902.03368.'
        ]
    },
    {
        dataset: "OCTMNIST",
        modality: "Retinal OCT",
        task: "Multi-Class (4)",
        samples: "109,309",
        splits: "97,477 / 10,832 / 1,000",
        license: "CC BY 4.0",
        licenseURL: "https://creativecommons.org/licenses/by/4.0/",
        citations: [
            'Daniel S. Kermany, Michael Goldbaum, et al., "Identifying medical diagnoses and treatable diseases by image-based deep learning," Cell, vol. 172, no. 5, pp. 1122 – 1131.e9, 2018.'
        ]
    },
    {
        dataset: "PneumoniaMNIST",
        modality: "Chest X-Ray",
        task: "Binary-Class (2)",
        samples: "5,856",
        splits: "4,708 / 524 / 624",
        license: "CC BY 4.0",
        licenseURL: "https://creativecommons.org/licenses/by/4.0/",
        citations: [
            'Daniel S. Kermany, Michael Goldbaum, et al., "Identifying medical diagnoses and treatable diseases by image-based deep learning," Cell, vol. 172, no. 5, pp. 1122 – 1131.e9, 2018.'
        ]
    },
    {
        dataset: "RetinaMNIST",
        modality: "Fundus Camera",
        task: "Ordinal Regression (5)",
        samples: "1,600",
        splits: "1,080 / 120 / 400",
        license: "CC BY 4.0",
        licenseURL: "https://creativecommons.org/licenses/by/4.0/",
        citations: [
            'DeepDR Diabetic Retinopathy Image Dataset (DeepDRiD), "The 2nd diabetic retinopathy grading and image quality estimation challenge," https://isbi.deepdr.org/data.html, 2020.'
        ]
    },
    {
        dataset: "BreastMNIST",
        modality: "Breast Ultrasound",
        task: "Binary-Class (2)",
        samples: "780",
        splits: "546 / 78 / 156",
        license: "CC BY 4.0",
        licenseURL: "https://creativecommons.org/licenses/by/4.0/",
        citations: [
            'Walid Al-Dhabyani, Mohammed Gomaa, et al., "Dataset of breast ultrasound images," Data in Brief, vol. 28, pp. 104863, 2020.'
        ]
    },
    {
        dataset: "BloodMNIST",
        modality: "Blood Cell Microscope",
        task: "Multi-Class (8)",
        samples: "17,092",
        splits: "11,959 / 1,712 / 3,421",
        license: "CC BY 4.0",
        licenseURL: "https://creativecommons.org/licenses/by/4.0/",
        citations: [
            'Andrea Acevedo, Anna Merino, et al., "A dataset of microscopic peripheral blood cell images for development of automatic recognition systems," Data in Brief, vol. 30, pp. 105474, 2020.'
        ]
    },
    {
        dataset: "TissueMNIST",
        modality: "Kidney Cortex Microscope",
        task: "Multi-Class (8)",
        samples: "236,386",
        splits: "165,466 / 23,640 / 47,280",
        license: "CC BY 3.0",
        licenseURL: "https://creativecommons.org/licenses/by/3.0/",
        citations: [
            'Vebjorn Ljosa, Katherine L Sokolnicki, et al., “Annotated high-throughput microscopy imagesets for validation.,” Nature methods, vol. 9, no. 7, pp.637–637, 2012.'
        ]
    },
    {
        dataset: "OrganAMNIST",
        modality: "Abdominal CT",
        task: "Multi-Class (11)",
        samples: "58,850",
        splits: "34,581 / 6,491 / 17,778",
        license: "CC BY 4.0",
        licenseURL: "https://creativecommons.org/licenses/by/4.0/",
        citations: [
            'Patrick Bilic, Patrick Ferdinand Christ, et al., "The liver tumor segmentation benchmark (lits)," arXiv preprint arXiv:1901.04056, 2019.',
            'Xuanang Xu, Fugen Zhou, et al., "Efficient multiple organ localization in ct image using 3d region proposal network," IEEE Transactions on Medical Imaging, vol. 38, no. 8, pp. 1885–1898, 2019.'
        ]
    },
    {
        dataset: "OrganCMNIST",
        modality: "Abdominal CT",
        task: "Multi-Class (11)",
        samples: "23,660",
        splits: "13,000 / 2,392 / 8,268",
        license: "CC BY 4.0",
        licenseURL: "https://creativecommons.org/licenses/by/4.0/",
        citations: [
            'Patrick Bilic, Patrick Ferdinand Christ, et al., "The liver tumor segmentation benchmark (lits)," arXiv preprint arXiv:1901.04056, 2019.',
            'Xuanang Xu, Fugen Zhou, et al., "Efficient multiple organ localization in ct image using 3d region proposal network," IEEE Transactions on Medical Imaging, vol. 38, no. 8, pp. 1885–1898, 2019.'
        ]
    },
    {
        dataset: "OrganSMNIST",
        modality: "Abdominal CT",
        task: "Multi-Class (11)",
        samples: "25,221",
        splits: "13,940 / 2,452 / 8,829",
        license: "CC BY 4.0",
        licenseURL: "https://creativecommons.org/licenses/by/4.0/",
        citations: [
            'Patrick Bilic, Patrick Ferdinand Christ, et al., "The liver tumor segmentation benchmark (lits)," arXiv preprint arXiv:1901.04056, 2019.',
            'Xuanang Xu, Fugen Zhou, et al., "Efficient multiple organ localization in ct image using 3d region proposal network," IEEE Transactions on Medical Imaging, vol. 38, no. 8, pp. 1885–1898, 2019.'
        ]
    },
];

const medmnist3d = [
    {
        dataset: "OrganMNIST3D",
        modality: "Abdominal CT",
        task: "Multi-Class (11)",
        samples: "1,743",
        splits: "972 / 161 / 610",
        license: "CC BY 4.0",
        licenseURL: "https://creativecommons.org/licenses/by/4.0/",
        citations: [
            'Patrick Bilic, Patrick Ferdinand Christ, et al., "The liver tumor segmentation benchmark (lits)," arXiv preprint arXiv:1901.04056, 2019.',
            'Xuanang Xu, Fugen Zhou, et al., "Efficient multiple organ localization in ct image using 3d region proposal network," IEEE Transactions on Medical Imaging, vol. 38, no. 8, pp. 1885–1898, 2019.'
        ]
    },
    {
        dataset: "NoduleMNIST3D",
        modality: "Chest CT",
        task: "Binary-Class (2)",
        samples: "1,849",
        splits: "1,158 / 165 / 526",
        license: "CC BY 3.0",
        licenseURL: "https://creativecommons.org/licenses/by/3.0/",
        citations: [
            'Samuel G. Armato III, Geoffrey McLennan, et al., “The lung image database consortium (lidc) and image database resource initiative (idri): A completed reference databaseof lung nodules on ct scans,” Medical Physics, vol. 38,no. 2, pp. 915–931, 2011.'
        ]
    },
    {
        dataset: "AdrenalMNIST3D",
        modality: "Shape from Abdominal CT",
        task: "Binary-Class (2)",
        samples: "1,584",
        splits: "1,188 / 98 / 298",
        license: "CC BY 4.0",
        licenseURL: "https://creativecommons.org/licenses/by/4.0/",
        citations: [
            'New'
        ]
    },
    {
        dataset: "FractureMNIST3D",
        modality: "Chest CT",
        task: "Multi-Class (3)",
        samples: "1,370",
        splits: "1,027 / 103 / 240",
        license: "CC BY-NC 4.0",
        licenseURL: "https://creativecommons.org/licenses/by-nc/4.0/",
        citations: [
            'Liang Jin, Jiancheng Yang, et al., “Deep-learning-assisted detection and segmentation of rib fractures from ct scans: Development and validation of fracnet,” EBioMedicine, vol. 62, pp. 103106, 2020.'
        ]
    },
    {
        dataset: "VesselMNIST3D",
        modality: "Shape from Brain MRA",
        task: "Binary-Class (2)",
        samples: "1,909",
        splits: "1,335 / 192 / 382",
        license: "CC0 1.0",
        licenseURL: "https://creativecommons.org/publicdomain/zero/1.0/",
        citations: [
            'Xi Yang, Ding Xia, et al., “Intra: 3d intracranial aneurysm dataset for deep learning,” inProceedings of the IEEE/CVF Conference onComputer Vision and Pattern Recognition (CVPR), June 2020.'
        ]
    },
    {
        dataset: "SynapseMNIST3D",
        modality: "Electron Microscope",
        task: "Binary-Class (2)",
        samples: "1,759",
        splits: "1,230 / 177 / 352",
        license: "CC BY 4.0",
        licenseURL: "https://creativecommons.org/licenses/by/4.0/",
        citations: [
            'New'
        ]
    },
];
